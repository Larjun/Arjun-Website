import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container } from "@mui/system";
import SpriteText from "three-spritetext";
import ForceGraph3D from "react-force-graph-3d";
import mindmapData from "../data/mindmapdata.json";

const Mindmap: React.FC = () => {
  const [graphData, setGraphData] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 1000 });

  useEffect(() => {
    setGraphData(mindmapData);

    // Set dimensions based on container
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setDimensions({ width: width, height: 1000 });
    }
  }, []);

  const fgRef = useRef<any>(null);

  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 200;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        500 // ms transition duration
      );
    },
    [fgRef]
  );

  return (
    <Container maxWidth={"lg"} className="infoPanel" id="technologies">
      <Container className="centerCont whoI">
        <h2>What I Can Do</h2>
      </Container>
      {graphData && (
        <Container
          ref={containerRef}
          className="centerCont"
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            zIndex: 0,
          }}
        >
          <ForceGraph3D
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="rgba(255, 255, 255, 0)"
            graphData={graphData}
            ref={fgRef}
            nodeAutoColorBy="group"
            linkWidth={1}
            linkOpacity={0.7}
            nodeThreeObjectExtend={true}
            nodeThreeObject={(node: any) => {
              const sprite = new SpriteText(node.id);
              sprite.color = node.color;
              sprite.textHeight = 15 - node.level * 2;
              sprite.offsetY = -(25 - node.level * 3);
              return sprite;
            }}
            onNodeClick={handleClick}
          />
        </Container>
      )}
    </Container>
  );
};

export default Mindmap;
