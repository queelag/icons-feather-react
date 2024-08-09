import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherHashElement } from '@aracna/icons-feather-web/elements/hash-element'

export const IconFeatherHash: ElementComponent<IconFeatherHashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHashElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-hash', IconFeatherHashElement)
