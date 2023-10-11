import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherInstagramElement } from '@aracna/icons-feather-web/elements/instagram-element'

export const IconFeatherInstagram: ElementComponent<IconFeatherInstagramElement, IconProps> = createBaseElementComponent<
  IconFeatherInstagramElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-instagram', IconFeatherInstagramElement)
