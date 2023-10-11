import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherTwitterElement } from '@aracna/icons-feather-web/elements/twitter-element'

export const IconFeatherTwitter: ElementComponent<IconFeatherTwitterElement, IconProps> = createBaseElementComponent<
  IconFeatherTwitterElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-twitter', IconFeatherTwitterElement)
