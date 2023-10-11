import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherXElement } from '@aracna/icons-feather-web/elements/x-element'

export const IconFeatherX: ElementComponent<IconFeatherXElement, IconProps> = createBaseElementComponent<
  IconFeatherXElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-x', IconFeatherXElement)
