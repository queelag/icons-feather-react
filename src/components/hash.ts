import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHashElement } from '@aracna/icons-feather-web/elements/hash-element'

export const IconFeatherHash: ElementComponent<IconFeatherHashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHashElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-hash', IconFeatherHashElement)
