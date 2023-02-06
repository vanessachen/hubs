import { addComponent } from "bitecs";
import { addObject3DComponent } from "../utils/jsx-entity";
import { PointLightTag, LightTag } from "../bit-components";
import { PointLight } from "three";
import { HubsWorld } from "../app";

export type PointLightParams = {
  color: string;
  intensity: number;
  range: number;
  decay: number;
  castShadow: boolean;
  shadowMapResolution: [number, number],
  shadowBias: number;
  shadowRadius: number;
};

const DEFAULTS = {
  intensity: 1.0,
  range: 0,
  decay: 2.0,
  castShadow: true,
  shadowMapResolution: [512, 512],
  shadowBias: 0,
  shadowRadius: 1.0
};

export function inflatePointLight(world: HubsWorld, eid: number, params: PointLightParams) {
  params = Object.assign({}, DEFAULTS, params);
  const light = new PointLight();
  light.color.set(params.color).convertSRGBToLinear();
  light.intensity = params.intensity;
  light.distance = params.range;
  light.decay = params.decay;
  light.castShadow = params.castShadow;
  light.shadow.bias = params.shadowBias;
  light.shadow.mapSize.fromArray(params.shadowMapResolution);
  light.shadow.camera.matrixAutoUpdate = true;

  addObject3DComponent(world, eid, light);
  addComponent(world, LightTag, eid);
  addComponent(world, PointLightTag, eid);
  return eid;
}
