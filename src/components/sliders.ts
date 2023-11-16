import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherSlidersElement } from '@aracna/icons-feather-web/elements/sliders-element'

export const IconFeatherSliders: ElementComponent<IconFeatherSlidersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlidersElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-sliders', IconFeatherSlidersElement)
