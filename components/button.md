# Button

## Overview

Button is an action control with six visual variants and eight sizes. Its public behavior is expressed through disabled and loading props, with hover and focus handled as transient interaction states; optional built-in leading and trailing icons are independent. Structure is measured across every variant, size, and state, color treatments map to each visual variant, and assistive technology receives one button focus stop with disabled and busy semantics.

**Source:** [Figma](https://www.figma.com/design/aoPsiTorXcI8qsIcNdvc16/Untitled?node-id=25-1261) · **Variants:** Variant: default | outline | secondary | ghost | destructive | link; Size: default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg; State: Default | Hover | Focus | Disabled | Loading

## Composition

- **Decorative children:** 4; documented through Structure and Color.

## Anatomy

```text
Variant=default, Size=default, State=Default (component)
├─ Leading icon (vector)
├─ Loading spinner (ellipse)
├─ Label (text)
└─ Trailing icon (vector)
```

## Implementation invariants

- Optional-property defaults: `label`=Button, `variant`=default, `size`=default, `isDisabled`=false, `isLoading`=false, `showLeadingIcon`=false, `showTrailingIcon`=false.
- Widths were measured with the default “Button” label and optional icons hidden. Runtime width changes with label length or visible icon content. Border rows distinguish painted strokes from configured but unpainted strokes.
- Accessibility focus stops: 1; visual variants must not alter reading order.

## API

> Hover and focus are transient interaction states; the public API exposes persistent disabled and loading behavior as booleans. The Figma source models Disabled and Loading as mutually exclusive State variants and provides no combined case, so treat these props as mutually exclusive or define their combined behavior explicitly in application code.

### Component API

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| label | string | — | Button | Text displayed inside the button. |
| variant | enum | default \| outline \| secondary \| ghost \| destructive \| link | default | Visual treatment of the button. |
| size | enum | default \| xs \| sm \| lg \| icon \| icon-xs \| icon-sm \| icon-lg | default | Controls the button dimensions. |
| isDisabled | boolean | true \| false | false | Prevents activation and uses the disabled appearance. |
| isLoading | boolean | true \| false | false | Shows the loading treatment; announce as busy while loading. |
| showLeadingIcon | boolean | true \| false | false | Shows the built-in leading icon. |
| showTrailingIcon | boolean | true \| false | false | Shows the built-in trailing icon. |

### Example 1 — Primary action

| Property | Value | Notes |
|---|---|---|
| label | "Save" | Concise action label. |
| variant | default | Default visual treatment. |
| size | default | Default size. |

### Example 2 — Action with leading icon

| Property | Value | Notes |
|---|---|---|
| label | "Continue" | Action label. |
| showLeadingIcon | true | Shows the built-in leading icon. |

### Example 3 — Loading action

| Property | Value | Notes |
|---|---|---|
| label | "Saving" | Label while the action is in progress. |
| isLoading | true | Shows the loading treatment and exposes a busy state. |

### Example 4 — Disabled destructive action

| Property | Value | Notes |
|---|---|---|
| label | "Delete" | Destructive action label. |
| variant | destructive | Destructive visual treatment. |
| isDisabled | true | Prevents activation. |

## Structure

### Button — default / enabled

Measured geometry for the default treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — default / hovered

Measured geometry for the default treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — default / focused

Measured geometry for the default treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — default / disabled

Measured geometry for the default treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — default / loading

Measured geometry for the default treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 92 | 70 | 84 | 100 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — outline / enabled

Measured geometry for the outline treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | “none” means configured but not painted in that variant. |
| borderAlign | inside | inside | inside | inside | inside | inside | inside | inside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — outline / hovered

Measured geometry for the outline treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | “none” means configured but not painted in that variant. |
| borderAlign | inside | inside | inside | inside | inside | inside | inside | inside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — outline / focused

Measured geometry for the outline treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — outline / disabled

Measured geometry for the outline treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | “none” means configured but not painted in that variant. |
| borderAlign | inside | inside | inside | inside | inside | inside | inside | inside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — outline / loading

Measured geometry for the outline treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 94 | 72 | 86 | 102 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | “none” means configured but not painted in that variant. |
| borderAlign | inside | inside | inside | inside | inside | inside | inside | inside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — secondary / enabled

Measured geometry for the secondary treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — secondary / hovered

Measured geometry for the secondary treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — secondary / focused

Measured geometry for the secondary treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — secondary / disabled

Measured geometry for the secondary treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — secondary / loading

Measured geometry for the secondary treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 92 | 70 | 84 | 100 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — ghost / enabled

Measured geometry for the ghost treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — ghost / hovered

Measured geometry for the ghost treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — ghost / focused

Measured geometry for the ghost treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — ghost / disabled

Measured geometry for the ghost treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — ghost / loading

Measured geometry for the ghost treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 92 | 70 | 84 | 100 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — destructive / enabled

Measured geometry for the destructive treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — destructive / hovered

Measured geometry for the destructive treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — destructive / focused

Measured geometry for the destructive treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — destructive / disabled

Measured geometry for the destructive treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — destructive / loading

Measured geometry for the destructive treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 92 | 70 | 84 | 100 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 170 | 36 | 170 | 170 | 170 | 36 | 170 | 170 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — link / enabled

Measured geometry for the link treatment in the enabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — link / hovered

Measured geometry for the link treatment in the hovered condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — link / focused

Measured geometry for the link treatment in the focused condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | – |
| borderWidth | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | “none” means configured but not painted in that variant. |
| borderAlign | outside | outside | outside | outside | outside | outside | outside | outside | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — link / disabled

Measured geometry for the link treatment in the disabled condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 80 | 56 | 64 | 88 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

### Button — link / loading

Measured geometry for the link treatment in the loading condition across every Size value.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| width | 92 | 70 | 84 | 100 | 36 | 24 | 32 | 40 | Measured with the default “Button” label; visible icons and custom text change hug width. |
| height | 36 | 24 | 32 | 40 | 36 | 24 | 32 | 40 | – |
| minWidth | 80 | 56 | 64 | 88 | – | – | – | – | – |
| itemSpacing | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | spacing/6 (6) | spacing/4 (4) | spacing/6 (6) | spacing/6 (6) | – |
| counterAxisSpacing | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| verticalPadding | 0 | 0 | 0 | 0 | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| horizontalPadding | spacing/16 (16) | spacing/8 (8) | spacing/12 (12) | spacing/20 (20) | – | – | – | – | Split padding axis; uniform padding is documented in the padding row. |
| padding | – | – | – | – | – | – | – | – | Uniform padding; icon sizes use this captured value. |
| cornerRadius | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | – |
| borderWidth | none | none | none | none | none | none | none | none | “none” means configured but not painted in that variant. |
| borderAlign | – | – | – | – | – | – | – | – | Only applicable when the border is painted. |
| layoutMode | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | HORIZONTAL | – |
| primaryAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| counterAxisAlignItems | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | CENTER | – |
| layoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| layoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| clipsContent | false | false | false | false | false | false | false | false | – |
| leadingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| leadingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| leadingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| leadingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| leadingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| leadingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerWidth | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerHeight | 16 | 12 | 16 | 16 | 16 | 12 | 16 | 16 | – |
| loadingSpinnerCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| loadingSpinnerStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| loadingSpinnerStrokeAlign | inside | inside | inside | inside | inside | inside | inside | inside | – |
| loadingSpinnerLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| loadingSpinnerLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| labelWidth | 38 | 38 | 38 | 38 | 38 | 38 | 38 | 38 | – |
| labelHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| labelStrokeWeight | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | – |
| labelStrokeAlign | outside | outside | outside | outside | outside | outside | outside | outside | – |
| labelLayoutSizingHorizontal | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| labelLayoutSizingVertical | HUG | HUG | HUG | HUG | FIXED | FIXED | FIXED | FIXED | – |
| textStyle | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | Button/Label | – |
| fontFamily | Inter | Inter | Inter | Inter | Inter | Inter | Inter | Inter | – |
| fontSize | 12 | 12 | 12 | 12 | 12 | 12 | 12 | 12 | – |
| fontWeight | Regular | Regular | Regular | Regular | Regular | Regular | Regular | Regular | – |
| lineHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| letterSpacing | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | -0.12 | – |
| trailingIconWidth | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconHeight | 16 | 16 | 16 | 16 | 16 | 16 | 16 | 16 | – |
| trailingIconCornerRadius | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | – |
| trailingIconStrokeWeight | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | – |
| trailingIconStrokeAlign | center | center | center | center | center | center | center | center | – |
| trailingIconLayoutSizingHorizontal | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |
| trailingIconLayoutSizingVertical | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | FIXED | – |

## Color

### default

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/action/primary/background · #0071E3 | color/action/primary/background · #0071E3 | color/action/primary/background · #0071E3 | color/blue/cobalt · #0066CC | color/action/primary/background · #0071E3 | Button surface fill color. |
| Container stroke | none | none | color/border/focus · #0071E3 | none | none | Border and visible focus ring. |
| Leading icon | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/neutral/white · #FFFFFF | Loading indicator fill color. |
| Label | color/action/primary/foreground · #FFFFFF | color/action/primary/foreground · #FFFFFF | color/action/primary/foreground · #FFFFFF | color/action/primary/foreground · #FFFFFF | color/action/primary/foreground · #FFFFFF | Button label text color. |
| Trailing icon | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | Optional trailing icon stroke color. |

### outline

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/surface/section · #1D1D1F | color/action/secondary/background · #000000 | Button surface fill color. |
| Container stroke | color/border/secondary-action · #6E6E73 | color/border/secondary-action · #6E6E73 | color/border/focus · #0071E3 | color/border/secondary-action · #6E6E73 | color/border/secondary-action · #6E6E73 | Border and visible focus ring. |
| Leading icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/neutral/porcelain · #F5F5F7 | Loading indicator fill color. |
| Label | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | Button label text color. |
| Trailing icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional trailing icon stroke color. |

### secondary

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/surface/section · #1D1D1F | color/surface/section · #1D1D1F | color/surface/section · #1D1D1F | color/neutral/steel · #333336 | color/surface/section · #1D1D1F | Button surface fill color. |
| Container stroke | none | none | color/border/focus · #0071E3 | none | none | Border and visible focus ring. |
| Leading icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/neutral/porcelain · #F5F5F7 | Loading indicator fill color. |
| Label | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | Button label text color. |
| Trailing icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional trailing icon stroke color. |

### ghost

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/surface/section · #1D1D1F | color/action/secondary/background · #000000 | Button surface fill color. |
| Container stroke | none | none | color/border/focus · #0071E3 | none | none | Border and visible focus ring. |
| Leading icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/neutral/porcelain · #F5F5F7 | Loading indicator fill color. |
| Label | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | color/action/secondary/foreground · #F5F5F7 | Button label text color. |
| Trailing icon | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | color/neutral/porcelain · #F5F5F7 | Optional trailing icon stroke color. |

### destructive

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/button/destructive/background · #B42318 | color/button/destructive/background · #B42318 | color/button/destructive/background · #B42318 | color/button/destructive/hover · #D92D20 | color/button/destructive/background · #B42318 | Button surface fill color. |
| Container stroke | none | none | color/border/focus · #0071E3 | none | none | Border and visible focus ring. |
| Leading icon | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/neutral/white · #FFFFFF | Loading indicator fill color. |
| Label | color/text/on-action · #FFFFFF | color/text/on-action · #FFFFFF | color/text/on-action · #FFFFFF | color/text/on-action · #FFFFFF | color/text/on-action · #FFFFFF | Button label text color. |
| Trailing icon | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | color/neutral/white · #FFFFFF | Optional trailing icon stroke color. |

### link

| Element | Default | Disabled | Focus | Hover | Loading | Notes |
|---|---|---|---|---|---|---|
| Container fill | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | color/action/secondary/background · #000000 | Button surface fill color. |
| Container stroke | none | none | color/border/focus · #0071E3 | none | none | Border and visible focus ring. |
| Leading icon | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | Optional leading icon stroke color. |
| Loading spinner | none | none | none | none | color/blue/electric · #2997FF | Loading indicator fill color. |
| Label | color/link/on-dark · #2997FF | color/link/on-dark · #2997FF | color/link/on-dark · #2997FF | color/link/on-dark · #2997FF | color/link/on-dark · #2997FF | Button label text color. |
| Trailing icon | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | color/blue/electric · #2997FF | Optional trailing icon stroke color. |

## Accessibility

- The visible label merges into one native Button focus stop; the label and icons are not separate stops.
- Default, Hover, and Focus have the same accessibility semantics and are grouped as enabled.
- Disabled removes the control from keyboard focus order; expose its disabled state using the platform-native mechanism.
- Loading keeps one button stop and announces progress as a state; never expose the spinner as a separate control.
- Keep leading and trailing icons decorative because the API provides no separate accessible name for them.
- Keep the accessible name concise and action-focused; do not duplicate visible text with a second label.

### enabled

Groups Figma Default, Hover, and Focus; these visual variants have the same screen reader semantics. The preview uses the Default variant.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | "Button, button" | .isButton | — | Do not: –; Do not: – | 1 |
| TalkBack (Android) | — | "Button, button" | Role.Button | — | Do not: –; Do not: – | 1 |
| ARIA (Web) | <button> | "Button, button" | — | — | Do not: –; Do not: – | 1 |

### disabled

Disabled button: zero focus stops; keep all three platform sections empty of focus-stop tables. VoiceOver (iOS): mark the control with the .notEnabled trait. TalkBack (Android): expose disabled() (or isEnabled=false for Views). ARIA (Web): prefer a native <button disabled>; for a custom button, expose aria-disabled="true" and suppress activation.

No platform mappings were emitted.

### loading

The loading indicator is decorative and remains part of the button; expose busy/loading through the button state without adding a focus stop.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | "Button, button, loading" | .isButton | — | Do not: –; Do not: –; Do not: – | 1 |
| TalkBack (Android) | — | "Button, button, loading" | Role.Button | — | Do not: –; Do not: –; Do not: – | 1 |
| ARIA (Web) | <button> | "Button, button, loading" | — | — | Do not: –; Do not: –; Do not: – | 1 |

## Known gaps

No known gaps.

## Evidence coverage

| Domain | Total | Emitted | Merged | Omitted | Unresolved |
|---|---|---|---|---|---|
| api | 7 | 6 | 1 | 0 | 0 |
| structure | 15120 | 14800 | 320 | 0 | 0 |
| color | 90 | 90 | 0 | 0 | 0 |
| voice | 7 | 1 | 6 | 0 | 0 |

---

Canonical JSON: `button.json`
