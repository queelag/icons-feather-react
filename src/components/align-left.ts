import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignLeftElement } from '@aracna/icons-feather-web/elements/align-left-element'

export const IconFeatherAlignLeft: ElementComponent<IconFeatherAlignLeftElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignLeftElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-left', IconFeatherAlignLeftElement)
