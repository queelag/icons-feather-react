import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherInstagramElement } from '@aracna/icons-feather-web/elements/instagram-element'

export const IconFeatherInstagram: ElementComponent<IconFeatherInstagramElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherInstagramElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-instagram', IconFeatherInstagramElement)
