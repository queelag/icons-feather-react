import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherImageElement } from '@aracna/icons-feather-web/elements/image-element'

export const IconFeatherImage: ElementComponent<IconFeatherImageElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherImageElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-image', IconFeatherImageElement)
