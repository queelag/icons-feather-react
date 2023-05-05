import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFacebookElement } from '@aracna/icons-feather-web/elements/facebook-element.js'

export const IconFeatherFacebook: ElementComponent<IconFeatherFacebookElement, IconProps> = createBaseElementComponent<
  IconFeatherFacebookElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-facebook', IconFeatherFacebookElement)
