import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCopyElement } from '@aracna/icons-feather-web/elements/copy-element'

export const IconFeatherCopy: ElementComponent<IconFeatherCopyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCopyElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-copy', IconFeatherCopyElement)
