<script>
/**
 * Stat component -- specify the widget icon, title and value.
 */
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <BCard no-body class="mini-stats-wid">
    <BCardBody>
      <div class="d-flex">
        <div class="flex-grow-1">
          <p class="text-muted fw-medium">{{ title }}</p>
          <h4 class="mb-0">{{ value }}</h4>
        </div>

        <div class="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
          <span class="avatar-title">
            <i :class="`${icon} font-size-24`"></i>
          </span>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>