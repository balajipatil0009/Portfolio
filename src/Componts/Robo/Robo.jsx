import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Robo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./robo.glb");
  const { actions } = useAnimations(animations, group);
  const scroll = useScroll();
  useEffect(() => {
    console.log("its me");
    actions["Vertical"].reset().fadeIn(0.5).play();
  });
  useFrame(() => {
    // console.log(scrolly.offset);
    const scrolly = scroll.offset * 2 < 1 ? scroll.offset * 2 : 1;
    group.current.position.x = scrolly;
  });
  return (
    <group ref={group} position={[1, -0.1, 4]} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, -1]}
          scale={1.134}
        >
          <group
            name="9281ed46901044c1b72a2a833dfc8f2afbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Plane"
                  position={[-1.328, 8.325, 0]}
                  rotation={[-1.345, -0.029, -1.696]}
                  scale={19.791}
                >
                  <mesh
                    name="Plane_MainBody_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_MainBody_0.geometry}
                    material={materials.MainBody}
                  />
                </group>
                <group
                  name="Plane001"
                  position={[-1.328, 8.325, 0]}
                  rotation={[-1.541, 0.225, -0.132]}
                  scale={19.791}
                >
                  <mesh
                    name="Plane001_MainBody_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_MainBody_0.geometry}
                    material={materials.MainBody}
                  />
                </group>
                <group
                  name="Plane002"
                  position={[-1.328, 8.325, 0]}
                  rotation={[-1.796, 0.029, 1.446]}
                  scale={19.791}
                >
                  <mesh
                    name="Plane002_MainBody_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_MainBody_0.geometry}
                    material={materials.MainBody}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[-1.328, 8.325, 0]}
                  rotation={[-1.6, -0.225, 3.01]}
                  scale={19.791}
                >
                  <mesh
                    name="Plane003_MainBody_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane003_MainBody_0.geometry}
                    material={materials.MainBody}
                  />
                </group>
                <group
                  name="Armature"
                  position={[-1.328, 2.666, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_13">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.MainBody}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <group
                      name="Object_15"
                      position={[-1.328, 19.394, 0]}
                      scale={100}
                    />
                    <group
                      name="Circle"
                      position={[0, 0, 0.167]}
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="Circle_MainBody_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_MainBody_0.geometry}
                        material={materials.MainBody}
                      />
                      <mesh
                        name="Circle_UnderGlass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Circle_UnderGlass_0.geometry}
                        material={materials.UnderGlass}
                      />
                      <group
                        name="Plane004"
                        position={[0, 0.035, 0.127]}
                        rotation={[-Math.PI / 2, 0, 0]}
                      >
                        <mesh
                          name="Plane004_EyeGlass_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane004_EyeGlass_0.geometry}
                          material={materials.EyeGlass}
                        />
                        <group
                          name="Circle008"
                          position={[0.07, 0.01, -0.033]}
                          rotation={[0.041, -0.095, -2.637]}
                        >
                          <mesh
                            name="Circle008_EyeEmit_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle008_EyeEmit_0.geometry}
                            material={materials.EyeEmit}
                          />
                        </group>
                        <group
                          name="Circle009"
                          position={[-0.03, -0.003, -0.043]}
                          rotation={[0, 0.045, 0]}
                          scale={0.503}
                        >
                          <mesh
                            name="Circle009_EyeEmit_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle009_EyeEmit_0.geometry}
                            material={materials.EyeEmit}
                          />
                        </group>
                      </group>
                      <group
                        name="Circle005"
                        position={[0.028, 0.055, 0.105]}
                        rotation={[-2.015, -0.105, 0.254]}
                      >
                        <mesh
                          name="Circle005_MainBody_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Circle005_MainBody_0.geometry}
                          material={materials.MainBody}
                        />
                      </group>
                      <group
                        name="Circle004"
                        position={[-0.028, 0.048, 0.116]}
                        rotation={[1.058, -0.08, 0.208]}
                      >
                        <mesh
                          name="Circle004_MainBody_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Circle004_MainBody_0.geometry}
                          material={materials.MainBody}
                        />
                      </group>
                      <group
                        name="Circle001"
                        position={[0.037, 0.094, 0.018]}
                        rotation={[-1.438, 0.269, -0.036]}
                      >
                        <mesh
                          name="Circle001_Crown_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Circle001_Crown_0.geometry}
                          material={materials.Crown}
                        />
                        <group name="Circle003">
                          <mesh
                            name="Circle003_MainBody_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle003_MainBody_0.geometry}
                            material={materials.MainBody}
                          />
                        </group>
                      </group>
                      <group
                        name="Circle002"
                        position={[-1.328, 19.394, 0]}
                        scale={100}
                      />
                      <group name="Circle007">
                        <mesh
                          name="Circle007_MainBody_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Circle007_MainBody_0.geometry}
                          material={materials.MainBody}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./robo.glb");
