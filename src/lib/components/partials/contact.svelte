<script lang="ts">
import { PUBLIC_WEBSITE_NAME } from "$env/static/public";

import { stack } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import { buttonRecipe } from "../ui/button";
</script>

<section class={stack({
    w: "full",
    bg: "neutral.900",
    flexDir: "column",
    gap: "4",
    px: { base: "8", sm: "24"},
    py: { base: "8", sm: "16"}
  })}>
  <div class={stack({
      flexDir: { base: "column", sm: "row" },
      alignItems: { base: "flex-start", sm: "center"},
      justifyContent: "space-between",
      gap: "2",
      w: { base: "full", sm: "2/3"},
      mx: "auto",
    })}>
      <h6 class={css({
          textStyle: "h5",
          fontWeight: "bold",
          color: "neutral.50",
        })}>
        Plus d'informations sur {PUBLIC_WEBSITE_NAME}
      </h6>

      <a
        href="/contact"
        class={cx(
          buttonRecipe({ variant: "solid"}),
          css({ _hover: { bg: "bg/70"}, hideBelow: "sm"}),
        )}
      >
        Contactez-nous
      </a>
  </div>
  <div class={css({
      w: { base: "full", sm: "2/3", },
      mx: "auto",
      mt: "2",
      spaceY: "6"
    })}>
    <p class={css({
        textStyle: "paragraph",
        color: "neutral.50",
        w: { base: "full", sm: "2/3"},
        fontSize: { base: "sm", sm: "base"}
      })}>
    Soutenez notre journalisme et impliquez-vous davantage dans notre communauté. Aidez-nous à fournir à raconter les histoires de nos communautés qui saignent et qui peinent à se relever. Aidez-nous à redonner espoir à ces millions de Congolais qui se battent chaque jour pour la paix et la sécurité.
    </p>
      <a
        href="/contact"
        class={cx(
          buttonRecipe({ variant: "solid"}),
          css({ _hover: { bg: "bg/70"}, hideFrom: "sm"}),
        )}
      >
        Contactez-nous
      </a>
  </div>
</section>
