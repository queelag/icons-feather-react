import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToolElement } from '@aracna/icons-feather-web/elements/tool-element'

export const IconFeatherTool: ElementComponent<IconFeatherToolElement, IconProps> = createBaseElementComponent<
  IconFeatherToolElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tool', IconFeatherToolElement)
