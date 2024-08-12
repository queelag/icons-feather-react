import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherMoonElement } from '@aracna/icons-feather-web/elements/moon-element'

export const IconFeatherMoon: ElementComponent<IconFeatherMoonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoonElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-moon', IconFeatherMoonElement)
