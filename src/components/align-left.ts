import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherAlignLeftElement } from '@aracna/icons-feather-web/elements/align-left-element'

export const IconFeatherAlignLeft: ElementComponent<IconFeatherAlignLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignLeftElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-align-left', IconFeatherAlignLeftElement)
