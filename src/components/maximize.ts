import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMaximizeElement } from '@aracna/icons-feather-web/elements/maximize-element.js'

export const IconFeatherMaximize: ElementComponent<IconFeatherMaximizeElement, IconProps> = createBaseElementComponent<
  IconFeatherMaximizeElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-maximize', IconFeatherMaximizeElement)
