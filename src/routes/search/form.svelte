<script lang="ts">
import { Field } from "@ark-ui/svelte";

import { stack } from "styled-system/patterns";
import { css } from "styled-system/css";

import { buttonRecipe } from "@/components/ui/button";
</script>

<form
  method="GET"
  class={stack({
    flexDir: {base: "column", sm: "row"},
    gap: "2",
    alignItems: { base: "flex-start", sm: "flex-end"}
  })}
>
  <Field.Root class={stack({
      flexDir: "column",
      flexGrow: "grow"
    })}>
    <Field.Label class={css({
        fontSize: "sm",
        color: "fg.muted"
      })}>
      Mots clés
    </Field.Label>
    <Field.Input
      name="search"
      type="search"
      placeholder="Rechercher..."
      class={css({
        borderWidth: "1px",
        borderColor: "bg.muted",
        px: "4",
        py: "1",
        rounded: "sm",
        w: "full",
        _placeholder: {
          fontSize: "sm"
        }
      })}
    />
  </Field.Root>

  <button
    type="submit"
    class={buttonRecipe({ variant: "solid" })}
  >
    Rechercher
  </button>
</form>
