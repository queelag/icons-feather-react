import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFileMinusElement } from '@aracna/icons-feather-web/elements/file-minus-element'

export const IconFeatherFileMinus: ElementComponent<IconFeatherFileMinusElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFileMinusElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-file-minus', IconFeatherFileMinusElement)
