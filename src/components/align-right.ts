import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignRightElement } from '@aracna/icons-feather-web/elements/align-right-element'

export const IconFeatherAlignRight: ElementComponent<IconFeatherAlignRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-right', IconFeatherAlignRightElement)
