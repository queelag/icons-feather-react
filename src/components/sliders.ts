import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSlidersElement } from '@aracna/icons-feather-web/elements/sliders-element'

export const IconFeatherSliders: ElementComponent<IconFeatherSlidersElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSlidersElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-sliders', IconFeatherSlidersElement)
