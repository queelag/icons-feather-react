import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMoonElement } from '@aracna/icons-feather-web/elements/moon-element'

export const IconFeatherMoon: ElementComponent<IconFeatherMoonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherMoonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-moon', IconFeatherMoonElement)
