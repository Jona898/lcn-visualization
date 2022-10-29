<script setup lang="ts">
import type { ElkNode } from "elkjs/lib/elk-api";
import { inject } from "vue";
import { NodeGroup as NodeGroupChild, NodeEdge, NodeLabel } from "./";
import { selectedNodeKey, changeSelectedNodeKey } from "@/helper";

const props = defineProps<{ node: ElkNode }>();
const selectedNode = inject(selectedNodeKey);
const changeSelectedNode = inject(changeSelectedNodeKey, (newSelect) => {
  console.log("ChangeSelectKodeKey Not defined for: ", newSelect);
});
</script>

<template>
  <g
    class="nodeGroup"
    :original-title="props.node.id"
    :transform="`translate(${props.node.x != undefined ? props.node.x : 0},${
      props.node.y != undefined ? props.node.y : 0
    })`"
    @click.stop="changeSelectedNode(props.node.id)">
    <!-- Node Main Box -->
    <rect
      class="nodeBackground"
      :width="props.node.width"
      :height="props.node.height"
      :class="{ selected: selectedNode == props.node.id }" />

    <!-- Node Ports -->
    <rect
      class="nodePort"
      v-for="port in props.node.ports"
      :key="port.id"
      :x="port.x"
      :y="port.y"
      :width="port.width"
      :height="port.height" />

    <!-- Node Id in Box -->
    <!-- <text class="nodeTextId" :x="props.node.width! / 2" :y="props.node.height! / 2">
          <tspan>
            {{ props.node.id }}
          </tspan>
        </text> -->

    <!-- Node Label -->
    <NodeLabel
      v-for="label in props.node.labels"
      :key="label.id"
      :label="label" />

    <!-- Children Nodes -->
    <NodeGroupChild
      v-for="child in props.node.children"
      :key="child.id"
      :node="child" />

    <!-- Edges -->
    <NodeEdge
      v-for="edge in node.edges"
      :key="edge.sources[0] + '-' + edge.targets[0]"
      :edge="edge" />
  </g>
</template>

<style scoped>
.nodeGroup {
}

.nodeGroup * {
}

.nodeBackground {
  fill: saddlebrown;
  stroke: #666;
}

.nodePort {
  fill: darkblue;
}

.nodeTextId {
  fill: blue;
  opacity: 1;
  dominant-baseline: middle;
  text-anchor: middle;
}
</style>