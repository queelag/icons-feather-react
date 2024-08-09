import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherAlignRightElement } from '@aracna/icons-feather-web/elements/align-right-element'

export const IconFeatherAlignRight: ElementComponent<IconFeatherAlignRightElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherAlignRightElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-align-right', IconFeatherAlignRightElement)
