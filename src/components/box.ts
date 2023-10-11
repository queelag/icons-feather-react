import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBoxElement } from '@aracna/icons-feather-web/elements/box-element'

export const IconFeatherBox: ElementComponent<IconFeatherBoxElement, IconProps> = createBaseElementComponent<
  IconFeatherBoxElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-box', IconFeatherBoxElement)
