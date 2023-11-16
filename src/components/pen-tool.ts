import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherPenToolElement } from '@aracna/icons-feather-web/elements/pen-tool-element'

export const IconFeatherPenTool: ElementComponent<IconFeatherPenToolElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherPenToolElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-pen-tool', IconFeatherPenToolElement)
