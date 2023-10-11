import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherMailElement } from '@aracna/icons-feather-web/elements/mail-element'

export const IconFeatherMail: ElementComponent<IconFeatherMailElement, IconProps> = createBaseElementComponent<
  IconFeatherMailElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-mail', IconFeatherMailElement)
