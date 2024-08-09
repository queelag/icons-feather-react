import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherImageElement } from '@aracna/icons-feather-web/elements/image-element'

export const IconFeatherImage: ElementComponent<IconFeatherImageElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherImageElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-image', IconFeatherImageElement)
