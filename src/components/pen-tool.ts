import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherPenToolElement } from '@aracna/icons-feather-web/elements/pen-tool-element'

export const IconFeatherPenTool: ElementComponent<IconFeatherPenToolElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPenToolElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-pen-tool', IconFeatherPenToolElement)
