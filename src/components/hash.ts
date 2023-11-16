import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHashElement } from '@aracna/icons-feather-web/elements/hash-element'

export const IconFeatherHash: ElementComponent<IconFeatherHashElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHashElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hash', IconFeatherHashElement)
