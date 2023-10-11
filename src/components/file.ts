import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFileElement } from '@aracna/icons-feather-web/elements/file-element'

export const IconFeatherFile: ElementComponent<IconFeatherFileElement, IconProps> = createBaseElementComponent<
  IconFeatherFileElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-file', IconFeatherFileElement)
