import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoonElement } from '@aracna/icons-feather-web/elements/moon-element'

export const IconFeatherMoon: ElementComponent<IconFeatherMoonElement, IconProps> = createBaseElementComponent<
  IconFeatherMoonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-moon', IconFeatherMoonElement)
