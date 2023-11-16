import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFacebookElement } from '@aracna/icons-feather-web/elements/facebook-element'

export const IconFeatherFacebook: ElementComponent<IconFeatherFacebookElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFacebookElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-facebook', IconFeatherFacebookElement)
