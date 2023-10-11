import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPenToolElement } from '@aracna/icons-feather-web/elements/pen-tool-element'

export const IconFeatherPenTool: ElementComponent<IconFeatherPenToolElement, IconProps> = createBaseElementComponent<
  IconFeatherPenToolElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pen-tool', IconFeatherPenToolElement)
