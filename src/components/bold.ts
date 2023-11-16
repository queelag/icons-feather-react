import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherBoldElement } from '@aracna/icons-feather-web/elements/bold-element'

export const IconFeatherBold: ElementComponent<IconFeatherBoldElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherBoldElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-bold', IconFeatherBoldElement)
