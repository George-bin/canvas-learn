<template>
  <div class="line-main-component">
    <canvas id="line" class="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.init();

    this.handleDrawTangram();
  },
  methods: {
    init() {
      let canvas = document.getElementById("line");
      canvas.width = 1024;
      canvas.height = 768;

      let context = canvas.getContext("2d");

      context.beginPath();
      context.moveTo(50, 50);
      context.lineTo(100, 100);
      context.lineTo(50, 100);
      context.lineTo(50, 50);
      // 线条的宽度
      context.lineWidth = 2;
      // 线条的颜色
      context.strokeStyle = "red";
      // 绘制线
      context.stroke();

      // 第二条线段的开始
      context.beginPath();
      context.moveTo(200, 100);
      context.lineTo(200, 200);
      context.strokeStyle = "black";
      context.lineWidth = 5;
      context.stroke();

      // 填充的颜色
      // context.fillStyle = "orange";
      // 填充颜色
      // context.fill();
    },
    // 绘制七巧板
    handleDrawTangram() {
      let tangram = [
        {
          p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }],
          color: "#caff67"
        },
        {
          p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }],
          color: "#67becf"
        },
        {
          p: [
            { x: 800, y: 0 },
            { x: 800, y: 400 },
            { x: 600, y: 600 },
            { x: 600, y: 200 }
          ],
          color: "#ef3d61"
        },
        {
          p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }],
          color: "#f9f51a"
        },
        {
          p: [
            { x: 400, y: 400 },
            { x: 600, y: 600 },
            { x: 400, y: 800 },
            { x: 200, y: 600 }
          ],
          color: "#a594c0"
        },
        {
          p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }],
          color: "#fa8ecc"
        },
        {
          p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }],
          color: "#f6ca29"
        }
      ];
      let canvas = document.getElementById("line");
      canvas.width = 800;
      canvas.height = 800;

      let context = canvas.getContext("2d");
      tangram.forEach(item => {
        draw(item, context);
      });

      function draw(item, context) {
        context.beginPath();
        context.moveTo(item.p[0].x, item.p[0].y);
        let len = item.p.length;
        for (let i = 1; i < len; i++) {
          context.lineTo(item.p[i].x, item.p[i].y);
        }
        context.closePath();
        context.fillStyle = item.color;
        context.fill();
      }
    }
  }
};
</script>

<style lang="scss">
.line-main-component {
  text-align: center;
  .canvas {
    display: inline-block;
    border: 1px solid gray;
  }
}
</style>
