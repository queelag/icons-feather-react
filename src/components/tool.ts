import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherToolElement } from '@aracna/icons-feather-web/elements/tool-element'

export const IconFeatherTool: ElementComponent<IconFeatherToolElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherToolElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-tool', IconFeatherToolElement)
