import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFilePlusElement } from '@aracna/icons-feather-web/elements/file-plus-element'

export const IconFeatherFilePlus: ElementComponent<IconFeatherFilePlusElement, IconProps> = createBaseElementComponent<
  IconFeatherFilePlusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-file-plus', IconFeatherFilePlusElement)
