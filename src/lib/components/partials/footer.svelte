<script lang="ts">
import { PUBLIC_WEBSITE_SLOGAN } from "$env/static/public";

import { stack } from "styled-system/patterns";
import { css, cx } from "styled-system/css";

import Kamole from "$lib/assets/kamole.png?enhanced";

import Contact from "./contact.svelte";

import { buttonRecipe } from "../ui/button";
</script>
<footer class={css({
        pb: "4",
    })}>

    <!-- Contact -->
    <Contact />

  <!-- Default footer menu -->
  <div class={css({
      py: "4",
      spaceY: "4"
    })}>
    <h5 class={css({
        textAlign: "center",
        textStyle: "h6",
        fontWeight: "bold"
      })}>
      {PUBLIC_WEBSITE_SLOGAN}
    </h5>

    <!-- Links -->
    <nav class={stack({
            flexDir: { base: "column", sm: "row"},
            justifyContent: "center",
            gap: "1",
            pb: "4"
        })}>
        <a
            class={cx(
                buttonRecipe({ variant: "subtle", size: "sm"}),
                css({ placeSelf: "center"})
            )}
            href="/"
        >
            Accueil
        </a>
        <a
            class={cx(
                buttonRecipe({ variant: "subtle", size: "sm"}),
                css({ placeSelf: "center"})
            )}
            href="/a-propos"
        >
            A propos de nous
        </a>
        <a
            class={cx(
                buttonRecipe({ variant: "subtle", size: "sm"}),
                css({ placeSelf: "center"})
            )}
            href="/contact"
        >
            Contact
        </a>
        <a
            class={cx(
                buttonRecipe({ variant: "subtle", size: "sm"}),
                css({ placeSelf: "center"})
            )}
            href="/confidentialite"
        >
            Confidentialité
        </a>
    </nav>

    <!-- Logo -->
    <enhanced:img
        src={Kamole}
        alt="Kamole"
        class={css({ w: "24", mx: "auto" })}
    />

    <!-- Social links -->

    <!-- Copyright -->
    <p class={css({
            fontSize: {base: "xs", sm: "sm"},
            textAlign: "center",
            color: "fg.muted"
        })}>
        &COPY; Tous droits réservés {(new Date()).getFullYear()}
    </p>
  </div>
</footer>
