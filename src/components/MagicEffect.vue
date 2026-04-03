<template>
  <div v-if="active" class="magic-container">
    <div class="magic-curtain"></div>

    <div class="magic-wand-wrapper">
      <v-icon
        icon="mdi-magic-staff"
        size="280"
        class="magic-wand-icon"
      ></v-icon>
      <!-- <v-icon icon="mdi-flare" size="x-large" class="wand-tip-glow"></v-icon> -->
    </div>

    <div
      v-for="n in 180"
      :key="n"
      class="particle-wrapper"
      :style="getParticleStyle()"
    >
      <div class="particle-core" :class="getParticleClass(n)">
        <v-icon
          :icon="
            n % 3 === 0 ? 'mdi-star' : n % 3 === 1 ? 'mdi-flare' : 'mdi-circle'
          "
          size="x-small"
        ></v-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ active: boolean }>();

const getParticleStyle = () => {
  const delay = 0.5 + Math.random() * 2.5 + "s";
  return {
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 1.5 + 2.0 + "s",
    animationDelay: delay,
  };
};

const getParticleClass = (n: number) => {
  if (n % 3 === 0) return "glow-gold";
  if (n % 3 === 1) return "glow-white";
  return "glow-cyan";
};
</script>

<style scoped>
.magic-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10000; /* 最前面 */
}

/* 魔法のカーテン：背景を少し暗くして光を「浮かび上がらせる」 */
.magic-curtain {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: curtain-fade 4s forwards;
}

.magic-wand-wrapper {
  position: absolute;
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 10001;
  animation: wand-magic-center 4s forwards cubic-bezier(0.4, 0, 0.2, 1);
}

.magic-wand-icon {
  /* 琥珀色を濃く、不透明度をMAXに */
  color: #ffb300 !important;
  opacity: 1 !important;
  filter: drop-shadow(0 0 15px #ffd54f) drop-shadow(0 0 30px #ff8f00)
    brightness(1.5);
}

/* .wand-tip-glow {
  position: absolute;
  top: 0;
  right: 0;
  color: white !important;
  opacity: 1 !important;
  filter: drop-shadow(0 0 20px #fff) drop-shadow(0 0 40px #00e5ff);
} */

.particle-wrapper {
  position: absolute;
  opacity: 0;
  animation: magic-sparkle-fixed forwards ease-out;
}

/* 粒子の「芯」：透け防止のコア */
.particle-core {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 1 !important;
}

/* 鮮やかで濃い色（背景に負けない） */
.glow-gold {
  color: #ffd700 !important;
  text-shadow:
    0 0 10px #ffab00,
    0 0 20px #ff6f00;
  filter: brightness(2);
}
.glow-white {
  color: #ffffff !important;
  text-shadow:
    0 0 10px #00e5ff,
    0 0 20px #00b8d4;
  filter: brightness(2);
}
.glow-cyan {
  color: #00e5ff !important;
  text-shadow:
    0 0 10px #00b8d4,
    0 0 20px #006064;
  filter: brightness(2);
}

@keyframes wand-magic-center {
  0% {
    transform: translate(-50%, -50%) scale(0) rotate(-45deg);
    opacity: 0;
  }
  15% {
    transform: translate(-50%, -50%) scale(1.2) rotate(0deg);
    opacity: 1;
  }
  30% {
    transform: translate(-50%, -50%) scale(1.3) rotate(-35deg);
  }
  60% {
    transform: translate(-50%, -50%) scale(1.3) rotate(70deg);
  }
  85% {
    transform: translate(-50%, -50%) scale(1.1) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -150%) scale(0);
    opacity: 0;
  }
}

@keyframes magic-sparkle-fixed {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  } /* 早く明るくする */
  100% {
    transform: scale(2.5) rotate(360deg);
    opacity: 0;
  }
}

@keyframes curtain-fade {
  0%,
  100% {
    opacity: 0;
  }
  20%,
  80% {
    opacity: 1;
  }
}
</style>
