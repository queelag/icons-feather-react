import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBoldElement } from '@aracna/icons-feather-web/elements/bold-element.js'

export const IconFeatherBold: ElementComponent<IconFeatherBoldElement, IconProps> = createBaseElementComponent<
  IconFeatherBoldElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bold', IconFeatherBoldElement)
