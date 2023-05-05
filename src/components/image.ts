import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherImageElement } from '@aracna/icons-feather-web/elements/image-element.js'

export const IconFeatherImage: ElementComponent<IconFeatherImageElement, IconProps> = createBaseElementComponent<
  IconFeatherImageElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-image', IconFeatherImageElement)
