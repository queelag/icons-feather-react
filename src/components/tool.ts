import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherToolElement } from '@aracna/icons-feather-web/elements/tool-element'

export const IconFeatherTool: ElementComponent<IconFeatherToolElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToolElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-tool', IconFeatherToolElement)
