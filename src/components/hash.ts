import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHashElement } from '@aracna/icons-feather-web/elements/hash-element'

export const IconFeatherHash: ElementComponent<IconFeatherHashElement, IconProps> = createBaseElementComponent<
  IconFeatherHashElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hash', IconFeatherHashElement)
