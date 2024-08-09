import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSlidersElement } from '@aracna/icons-feather-web/elements/sliders-element'

export const IconFeatherSliders: ElementComponent<IconFeatherSlidersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlidersElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sliders', IconFeatherSlidersElement)
