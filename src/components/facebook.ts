import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFacebookElement } from '@aracna/icons-feather-web/elements/facebook-element'

export const IconFeatherFacebook: ElementComponent<IconFeatherFacebookElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFacebookElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-facebook', IconFeatherFacebookElement)
