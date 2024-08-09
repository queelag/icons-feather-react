import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherTwitterElement } from '@aracna/icons-feather-web/elements/twitter-element'

export const IconFeatherTwitter: ElementComponent<IconFeatherTwitterElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherTwitterElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-twitter', IconFeatherTwitterElement)
